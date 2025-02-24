import Link from "next/link";
import { IconPoint } from "@tabler/icons-react";

export default function Nav() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-light text-white">NedTRG</h1>
      </div>
      <div>
        <Link className="flex space-x-4" href="/">
          <div>
            <button className="p-2 border-2 border-white text-white rounded-full">
              <span className="inline-flex uppercase font-extrabold">
                Let's Talk <IconPoint stroke={2} />
              </span>
            </button>
          </div>
          <div>
            <button className="bg-white p-2 border-2 border-white text-white rounded-full">
              <span className="inline-flex uppercase font-extrabold text-black">
                Menu <IconPoint stroke={2} />
              </span>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
