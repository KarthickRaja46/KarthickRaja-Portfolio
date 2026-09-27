/* Fixed aurora lights beneath the glass. */
export default function Ambient() {
  return (
    <div className="ambient" aria-hidden="true">
      <span className="aurora__blob aurora__blob--gold" />
      <span className="aurora__blob aurora__blob--violet" />
      <span className="aurora__blob aurora__blob--azure" />
      <span className="aurora__blob aurora__blob--rose" />
      <span className="ambient__grid" />
      <span className="ambient__grain" />
      <span className="ambient__vignette" />
    </div>
  );
}
