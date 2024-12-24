import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <div className="text-center">
        <div className="page-header my-3">
          <h1 className="my-3">Weather Project</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              id="query"
              placeholder="City, State, Country"
            />
            <div className="input-group-append">
              <button className="btn btn-primary search" type="button">
                Search
              </button>
            </div>
          </div>

          <hr />
        </div>
      </div>
    </div>
  );
}
