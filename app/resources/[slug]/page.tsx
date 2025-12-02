export default function TestSlugPage({ params }: { params: { slug: string } }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "black",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px",
      }}
    >
      SLUG PAGE WORKS – slug = <strong style={{ marginLeft: 8 }}>{params.slug}</strong>
    </div>
  );
}
