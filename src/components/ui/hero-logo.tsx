import { cn } from "@/lib/utils";

interface HeroLogoProps {
  className?: string;
  animated?: boolean;
}

export const HeroLogo = ({ className, animated = true }: HeroLogoProps) => {
  return (
    <div className={cn("relative inline-block", className)}>
      {/* Main logo container */}
      <div 
        className={cn(
          "relative flex flex-col items-center justify-center",
          animated && "animate-logo-assemble"
        )}
      >
        {/* Top triangle - forms the peak of "A" */}
        <div 
          className={cn(
            "relative mb-[-8px] z-10",
            animated && "animate-float"
          )}
          style={{ animationDelay: '0.2s' }}
        >
          <div className="w-0 h-0 border-l-[30px] border-r-[30px] border-b-[30px] border-l-transparent border-r-transparent border-b-white drop-shadow-lg" />
          {/* Glowing effect */}
          <div className="absolute inset-0 w-0 h-0 border-l-[30px] border-r-[30px] border-b-[30px] border-l-transparent border-r-transparent border-b-primary-light opacity-30 blur-sm" />
        </div>

        {/* Middle row - sides of "A" */}
        <div className="flex items-end gap-4 mb-[-8px]">
          <div 
            className={cn(
              "relative",
              animated && "animate-float"
            )}
            style={{ animationDelay: '0.4s' }}
          >
            <div className="w-0 h-0 border-l-[25px] border-r-[25px] border-b-[35px] border-l-transparent border-r-transparent border-b-white drop-shadow-lg" />
            <div className="absolute inset-0 w-0 h-0 border-l-[25px] border-r-[25px] border-b-[35px] border-l-transparent border-r-transparent border-b-primary opacity-40 blur-sm" />
          </div>
          
          <div 
            className={cn(
              "relative",
              animated && "animate-float"
            )}
            style={{ animationDelay: '0.6s' }}
          >
            <div className="w-0 h-0 border-l-[25px] border-r-[25px] border-b-[35px] border-l-transparent border-r-transparent border-b-white drop-shadow-lg" />
            <div className="absolute inset-0 w-0 h-0 border-l-[25px] border-r-[25px] border-b-[35px] border-l-transparent border-r-transparent border-b-primary opacity-40 blur-sm" />
          </div>
        </div>

        {/* Bottom row - base of "A" */}
        <div className="flex items-end gap-2">
          <div 
            className={cn(
              "relative",
              animated && "animate-float"
            )}
            style={{ animationDelay: '0.8s' }}
          >
            <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[25px] border-l-transparent border-r-transparent border-b-white drop-shadow-lg" />
            <div className="absolute inset-0 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[25px] border-l-transparent border-r-transparent border-b-primary-dark opacity-50 blur-sm" />
          </div>
          
          <div 
            className={cn(
              "relative",
              animated && "animate-float"
            )}
            style={{ animationDelay: '1s' }}
          >
            <div className="w-0 h-0 border-l-[18px] border-r-[18px] border-b-[22px] border-l-transparent border-r-transparent border-b-white drop-shadow-lg" />
            <div className="absolute inset-0 w-0 h-0 border-l-[18px] border-r-[18px] border-b-[22px] border-l-transparent border-r-transparent border-b-tech-blue opacity-60 blur-sm" />
          </div>
          
          <div 
            className={cn(
              "relative",
              animated && "animate-float"
            )}
            style={{ animationDelay: '1.2s' }}
          >
            <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[25px] border-l-transparent border-r-transparent border-b-white drop-shadow-lg" />
            <div className="absolute inset-0 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[25px] border-l-transparent border-r-transparent border-b-primary-dark opacity-50 blur-sm" />
          </div>
        </div>

        {/* Subtle glow around entire logo */}
        <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-full blur-xl scale-150" />
      </div>
    </div>
  );
};