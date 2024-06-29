import CodeBlock from "./CodeBlock";

interface IDemoProps {
  children: React.ReactNode;
  code: string;
}

export const Demo: React.FC<IDemoProps> = ({ children, code }) => {
  return (
    <div
      style={{
        minWidth: "500px",
        width: "100%",
        marginTop: "40px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100% ",
          border: "1px solid #eee",
          borderRadius: "5px 5px 0 0",
          padding: "60px 20px",
          backgroundColor: "#fff",
          display: "grid",
          placeItems: "center",
        }}
      >
        {children}
      </div>
      <CodeBlock code={code} />
    </div>
  );
};
