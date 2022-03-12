export default function PrimaryButton({ label, onClick }) {
  return (
    <button type="button" className="button is-primary is-fullwidth" onClick={onClick}>
      { label }
    </button>
  )
}
