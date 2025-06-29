export function Img({ nome, idade, imgurl }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "10px",
        borderBottom: "1px solid black",
      }}
    >
      <img
        style={{ borderRadius: "100px", height: "100px", width: "100px" }}
        src={imgurl}
        alt=""
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: ".1px",
          padding: "0",
          paddingTop: "10px",
          margin: "0",
          height: "2px",
        }}
      >
        <h1
          style={{
            height: ".5px",
          }}
        >
          {nome}
        </h1>
        <p
          style={{
            height: ".5px",
          }}
        >
          {idade} anos
        </p>
      </div>
    </div>
  );
}
