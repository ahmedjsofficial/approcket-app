export default function Title({ title }: { title: string }) {
  return (
    <div className="mb-10 grid items-center">
      <h1 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold max-w-none lg:max-w-4xl">
        {title}
      </h1>
    </div>
  );
}
