interface ImageSkeletonProps {
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape';
  className?: string;
}

export default function ImageSkeleton({ 
  aspectRatio = 'square', 
  className = '' 
}: ImageSkeletonProps) {
  const ratioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]'
  };

  return (
    <div 
      className={`${ratioClasses[aspectRatio]} ${className} relative overflow-hidden bg-slate-200 rounded-lg`}
      role="status"
      aria-label="Loading image"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-shimmer" 
        style={{ backgroundSize: '200% 100%' }} 
      />
    </div>
  );
}
