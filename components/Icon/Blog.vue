<template>
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
			<path stroke-dasharray="56" stroke-dashoffset="56" d="M3 21L4.99998 15L16 4C17 3 19 3 20 4C21 5 21 7 20 8L8.99998 19L3 21">
				<animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0" />
			</path>
			<g stroke-dasharray="6" stroke-dashoffset="6">
				<path d="M15 5L19 9">
					<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0" />
				</path>
				<path stroke-width="1" d="M6 15L9 18">
					<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0" />
				</path>
			</g>
		</g>
		<path fill="currentColor" fill-opacity="0" d="M9 18L18 9L15 6L6 15L9 18Z">
			<animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3" />
		</path>
	</svg>
</template>
