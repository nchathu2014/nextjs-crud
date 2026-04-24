export type Student = {
  email: string;
  id?: number;
  name: string;
  score: number;
  subject: string;
};

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export default async function Home() {
  // const res = await fetch(`${baseUrl}/api/v1/users`);
  // const resData = await res.json();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl">Backend Server API Routes</h1>

      <h2 className="text-2xl mt-10 mb-5">Student Details</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Subject</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Score</th>
              </tr>
            </thead>
            {/* <tbody>
              {resData.data?.students?.map((student: Student) => (
                <tr
                  key={student?.id}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <td className="px-6 py-4">{student?.id}</td>
                  <td className="px-6 py-4">{student?.name}</td>
                  <td className="px-6 py-4">{student?.subject}</td>
                  <td className="px-6 py-4">{student?.email}</td>
                  <td className="px-6 py-4">{student?.score}</td>
                </tr>
              ))}
            </tbody> */}
          </table>
        </div>
      </div>
    </div>
  );
}
