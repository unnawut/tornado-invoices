export default function PrimaryButton({ label, onClick }) {
  return (
    <button type="button" class="button is-primary is-fullwidth" onClick={onClick}>
      { label }
    </button>
  )
}
