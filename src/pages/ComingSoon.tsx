export const ComingSoon = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ color: "#A020F0", fontSize: "30px" }}>tStore</h1>
      <p className="text-[20px] w-[50%]">
        Welcome to <b className="text-[#A020F0]">tStore</b>. I was tired of
        CRUD operations, so I decided to make my own state management. It's
        not going to be that complicated like{" "}
        <b className="text-[#A020F0]">
          <a target="_blank" href="https://redux-toolkit.js.org/">
            Redux Toolkit
          </a>
        </b>{" "}
        or{" "}
        <b className="text-[#A020F0]">
          <a target="_blank" href="https://zustand-demo.pmnd.rs/">
            Zustand
          </a>
        </b>{" "}
        but It's a simple and lightweight solution that can be easily
        integrated into any React project.
      </p>
    </div>
  );
};
