import Image from "next/image";
import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";
import { IconFileTypeXls, IconUpload, IconX } from "@tabler/icons-react";
import CSVReader from "react-csv-reader";
import { useEffect, useState } from "react";
import PapaParse from "papaparse";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });
interface body {
  id: number;
  link: string;
}
export default function Home() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [csvData, setCsvData] = useState<Array<40>>();
  let tableBody = null;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event?.target.files?.[0] || null);
  };
  const { data, status } = useSession();

  function sanitize(arr: { [key: string]: any }[]): { [key: string]: any }[] {
    return arr.map((obj) => {
      const newObj: { [key: string]: any } = {};

      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          const newKey = key.replace(/\s/g, "_");
          newObj[newKey] = obj[key];
        }
      }
      const selectTagsArray = newObj.select_tags
        .split(",")
        .map((tag: any) => tag.trim());
      newObj.select_tags = selectTagsArray;

      return newObj;
    });
  }

  const handleUpload = () => {
    // @ts-ignore
    PapaParse.parse(file, {
      skipEmptyLines: true,
      header: true,
      complete: function (results: any) {
        const value: any = sanitize(results.data);
        setCsvData(value);
      },
    });
  };

 

  const acceptableCSVFileTypes =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, .csv";
  return (
    <div className="w-full">
      <div className="flex items-center w-full justify-center">
        <div className="flex w-[596px] items-center justify-center  flex-col">
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <IconFileTypeXls />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  {file ? (
                    file.name
                  ) : (
                    <span className="font-semibold">Click to upload</span>
                  )}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Only Excel File
                </p>
              </div>
              <input
                type="file"
                accept={acceptableCSVFileTypes}
                className="hidden"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mt-2 w-full">
            <button
              type="button"
              onClick={handleUpload}
              className="text-white 605BFF w-full bg-[#605BFF]  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <div className="flex flex-row justify-center items-center space-x-2">
                <div>
                  <IconUpload />
                </div>
                <div>Upload</div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {csvData ? (
        <div className="mt-5 flex w-full justify-start">
          <div>Uploads</div>
          <div className="w-full">
            <section className=" bg-blueGray-50 w-full">
              <div className="w-full mb-12 px-4 mx-auto mt-24">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                  <div className="block w-full overflow-x-auto">
                    <table className="items-center bg-transparent w-full border-collapse bg-gray-300">
                      <thead>
                        <tr>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Sr No
                          </th>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Links
                          </th>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Prefix
                          </th>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Added Tags
                          </th>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Tags
                          </th>
                        </tr>
                      </thead>

                      <tbody className="P-5">
                        {csvData.map((row: any, rowIndex: any) => {
                          return (
                            <tr key={rowIndex}>
                              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                {row.id}
                              </th>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <a href={row.links}>{row.links}</a>
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                {row.prefix}
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                  {row.select_tags.map((tag: string) => (
                                    <option value="tag">{tag}</option>
                                  ))}
                                </select>
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <div className="p-2 rounded-md bg-blue-400 flex space-x-2 items-center justify-center">
                                  <div>Tag</div>
                                  <div>
                                    <IconX size={"0.7rem"} />
                                  </div>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
