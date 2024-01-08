import Title from "./components/Title";
import UserInput from "./components/UserInput";

export default function Home() {
  return (
    <main className="bg-white flex h-screen flex-col items-center justify-between p-6">
      <Title />

      <UserInput />
    </main>
  )
}
