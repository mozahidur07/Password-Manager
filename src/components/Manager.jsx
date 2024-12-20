import React from "react";
import "../navbar.css";
import { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from 'uuid';


const Manager = () => {
  const [form, setform] = useState({ site: "", username: "", password: "" });

  const [passwordArry, setpasswordArry] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("password");
    if (passwords) {
      setpasswordArry(JSON.parse(passwords));
    }
  }, []);

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Copied to clipboard!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    } catch (err) {
      toast.error('Failed to copy!', { autoClose: 2000 });
    }
  };
  
  const savepass = () => {
    if (!form.site || !form.username || !form.password) {
      toast.error("All fields are required!", { autoClose: 2000 });
      return;
    }
    setpasswordArry([...passwordArry, { ...form, id: uuidv4() }]);
    toast.success('Added Successfully !', { autoClose: 2000 });
    localStorage.setItem(
      "password",
      JSON.stringify([...passwordArry, { ...form, id: uuidv4() }])
            
    );
    setform({ site: "", username: "", password: "" });
    };
  
  const deletepassword = (id) => {
    let c = confirm("Are you really want to delete ?")  
    if(c) {     
      toast.info('Deleted Successfully !', { autoClose: 2000 });
      setpasswordArry(passwordArry.filter(item=>item.id!==id))
      localStorage.setItem("password", JSON.stringify(passwordArry.filter(item=>item.id!==id)))
    }
  };

  const deletepass = () => {
    let c = confirm("Are you really want to delete all ?")  
    if(c) {
          toast.info('Deleting...', { autoClose: 2000 });
          setTimeout(() => {
            localStorage.clear();
            window.location.reload();            
          }, 2000);
    } 
  };

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>
      <div>
        <div className=" h-56 flex flex-col justify-end items-center py-2">
          <input
            onChange={handlechange}
            value={form.site}
            placeholder="Enter website url"
            type="text"
            name="site"
            id="site"
            className="ip url w-120 text-md px-3 m-4 h-10 rounded-3xl"
          />
          <div className="w-full flex justify-center h-9 gap-14">
            <input
              onChange={handlechange}
              value={form.username}
              type="text"
              className="ip website px-2 rounded-md"
              placeholder="username"
              name="username"
              id="username"
            />
            <input
              onChange={handlechange}
              value={form.password}
              type="text"
              className="ip website px-2 rounded-md"
              placeholder="password"
              name="password"
              id="password"
            />
          </div>
          <div className="flex gap-4">
            <button
              onClick={savepass}
              className="my-8 flex justify-center items-center gap-2 bg-purple-600 hover:bg-purple-400 p-1 w-44 rounded-3xl font-bold text-white"
            >
              <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover"
                colors="primary:#ffffff"
              ></lord-icon>
              Add Details
            </button>
            <button
              onClick={deletepass}
              className="my-8 flex justify-center items-center gap-2 bg-purple-600 hover:bg-purple-400 p-1 w-44 rounded-3xl font-bold text-white"
            >
              <lord-icon
                src="https://cdn.lordicon.com/skkahier.json"
                trigger="hover"
                colors="primary:#ffffff"
              ></lord-icon>
              Delete All
            </button>
          </div>
        </div>
        <div className="passwords flex flex-col items-center">
          <h2 className="text-center font-bold text-2xl text-purple-600">
            Your Passwords
          </h2>
          {passwordArry.length === 0 && (
            <div className="bg-purple-300 w-4/5 h-20 my-5 items-center flex p-2 rounded-md text-white font-bold">
              No passwords to show
            </div>
          )}
          {passwordArry.length != 0 && (
            <table className="w-5/6 table-auto my-3 overflow-hidden rounded-t-xl">
              <thead className="bg-purple-500 h-9 text-white">
                <tr>
                  <th>Sites</th>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="bg-purple-200">
                {passwordArry.map((item, index) => {
                  return (
                    <tr key={index} className="border-t-2 border-white">
                      <td className="py-2 text-center">
                        <div className="flex justify-center items-center">
                          <a
                            href={
                              item.site.startsWith("http")
                                ? item.site
                                : `https://${item.site}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.site}
                          </a>
                          <div
                            className="cursor-pointer"
                            onClick={() => {
                              copyText(item.site);
                            }}
                          >
                            <lord-icon
                              style={{
                                paddingTop: "7px",
                                transform: "scale(.8",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className=" py-2 text-center">
                        <div className="flex justify-center items-center">
                          <span>{item.username}</span>
                          <div
                            className="cursor-pointer"
                            onClick={() => {
                              copyText(item.username);
                            }}
                          >
                            <lord-icon
                              style={{
                                paddingTop: "7px",
                                transform: "scale(.8",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className=" py-2 text-center">
                        <div className="flex justify-center items-center">
                          <span>{item.password}</span>
                          <div
                            className="cursor-pointer"
                            onClick={() => {
                              copyText(item.password);
                            }}
                            >
                            <lord-icon
                              style={{
                                paddingTop: "7px",
                                transform: "scale(.8",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                              ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className=" py-2 text-center">
                        <div className="flex justify-center items-center">
                          <div
                            className="cursor-pointer"
                            onClick={() => {
                              deletepassword(item.id);
                            }}
                          >
                            <lord-icon
                              style={{
                                paddingTop: "7px",
                                transform: "scale(.7",
                              }}
                              src="https://cdn.lordicon.com/skkahier.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
