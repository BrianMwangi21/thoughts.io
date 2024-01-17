import Canvas from "./components/Canvas";
import Title from "./components/Title";
import UserInput from "./components/UserInput";

export default function Home() {
  return (
    <main className="bg-scroll-container flex h-screen flex-col items-center justify-between p-6">
      <Title />
      <UserInput />
      <Canvas />

      <div className="hidden">
        <a href="https://www.freepik.com/free-vector/beautiful-clear-blue-sky-background_2176010.htm?query=animated clouds">Image by brgfx</a> on Freepik
      </div>
    </main>
  )
}
