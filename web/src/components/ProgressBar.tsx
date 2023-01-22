interface ProgressBarProps {
  progress: number;
}

export function ProgressBar(props: ProgressBarProps) {
  const progressStyles = {
    width: `${props.progress}%`,
  };
  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div
        className="h-3 rounded-xl bg-violet-600 w-3/4"
        style={progressStyles}
        role="progressbar"
        aria-lavel="Progresso de hábitos completados neste dia"
        aria-valuenow={props.progress}
      ></div>
    </div>
  );
}
