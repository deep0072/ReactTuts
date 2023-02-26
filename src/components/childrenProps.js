function Card({ children }) {
  return (
    <div>
      <div className="card">
        <div className="card-content">{children}</div>
      </div>
    </div>
  );
}

export function ChildrenProp() {
  return (
    // content between Card tag will be render in children by default only body part passed in children.
    <div>
      <h1> ----------the below is children prop part----------------</h1>
      <Card>
        <h1>Photo</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </Card>

      <Card>
        <h1>About</h1>
        <p>
          Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
          natural treatment to schistosomiasis.
        </p>
      </Card>
    </div>
  );
}
