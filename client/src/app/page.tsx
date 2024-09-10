const style = {
  wrapper: 'h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between '
}

export default function Home() {
  return (
    <div className={style.wrapper}>
      <h2>Olá!</h2>
      <h2>Até logo!</h2>
      <h2>Vamos codar!</h2>
    </div>
  );
}
