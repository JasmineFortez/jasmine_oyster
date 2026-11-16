// Grey placeholder bars in the shape of a story, shown while it loads.
export default function StorySkeleton() {
  const bar = "rounded-sm bg-rule motion-safe:animate-pulse";
  return (
    <div aria-hidden="true">
      <div className={`mt-8 h-4 w-48 ${bar}`} />
      <div className={`mt-4 h-12 w-full ${bar}`} />
      <div className={`mt-3 h-12 w-2/3 ${bar}`} />
      <div className={`mt-8 h-4 w-80 ${bar}`} />
      <div className="mt-6 border-b-[3px] border-mark" />
      <div className="mt-10 space-y-3">
        <div className={`h-4 w-full ${bar}`} />
        <div className={`h-4 w-full ${bar}`} />
        <div className={`h-4 w-5/6 ${bar}`} />
      </div>
    </div>
  );
}
