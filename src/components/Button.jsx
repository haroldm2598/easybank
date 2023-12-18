function Button({ customClass, name }) {
	return (
		<button className={`${customClass} w-48 btn customBtn rounded-full`}>
			{name}
		</button>
	);
}

export default Button;
