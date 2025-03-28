
import React from 'react';
import { formatPromille, formatTimeInterval, TimePoint } from '@/utils/alcoholCalculations';

interface RecoveryTimelineProps {
  timePoints: TimePoint[];
  drivingThreshold: number;
}

export default function RecoveryTimeline({ timePoints, drivingThreshold }: RecoveryTimelineProps) {
  if (timePoints.length === 0) return null;
  
  const startTime = timePoints[0].time;
  const endTime = timePoints[timePoints.length - 1].time;
  
  // Find driving threshold point
  const drivingPoint = timePoints.find(point => point.promille <= drivingThreshold);
  
  // Calculate total duration in hours
  const durationMs = endTime.getTime() - startTime.getTime();
  const durationHours = durationMs / (1000 * 60 * 60);
  
  // Find max promille for scaling
  const maxPromille = Math.max(...timePoints.map(p => p.promille), 0.5); // Use at least 0.5 for better visibility
  
  // Calculate driving point position as percentage
  const drivingPointPosition = drivingPoint 
    ? (drivingPoint.time.getTime() - startTime.getTime()) / durationMs * 100
    : null;
  
  // Calculate zero point position as percentage
  const zeroPointPosition = 100; // Always at the end
  
  return (
    <div className="my-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 uppercase">Przybliżony czas na wytrzeźwienie</h2>
      
      <div className="relative h-8 rounded-full overflow-hidden bg-gradient-to-r from-red-500 via-amber-500 to-green-400">
        {/* Driving threshold marker */}
        {drivingPointPosition !== null && (
          <div 
            className="timeline-marker"
            style={{ left: `${drivingPointPosition}%` }}
          >
            <div className="bg-white shadow-md rounded-md p-2 text-xs">
              <div className="font-bold">{formatPromille(drivingThreshold)}</div>
              <div>{formatTimeInterval(drivingPoint ? (drivingPoint.time.getTime() - startTime.getTime()) / (1000 * 60 * 60) : 0)}</div>
            </div>
          </div>
        )}
        
        {/* Zero threshold marker */}
        <div 
          className="timeline-marker"
          style={{ left: `${zeroPointPosition}%` }}
        >
          <div className="bg-white shadow-md rounded-md p-2 text-xs">
            <div className="font-bold">{formatPromille(0)}</div>
            <div>{formatTimeInterval(durationHours)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
