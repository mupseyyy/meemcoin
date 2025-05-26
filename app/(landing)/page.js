import Image from "next/image";

export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "20px" }}>
      <h1>🚀 Airdrop do GAT está AO VIVO!</h1>
      <p>Receba tokens grátis do memecoin mais estiloso do universo 😎</p>

      <Image
        src="/gat-mascote.png"
        alt="Mascote GAT"
        width={300}
        height={300}
      />

      <br /><br />

      <a
        href="https://twitter.com/intent/tweet?text=Participe+do+airdrop+do+GAT!+gat-coin.vercel.app"
        target="_blank"
      >
        <button
          style={{
            backgroundColor: "#f7931a",
            color: "white",
            padding: "12px 24px",
            borderRadius: "10px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          📣 Compartilhar no Twitter
        </button>
      </a>
    </main>
  );
}
