<template>
	<div class="layout-container">
		<slot name="navbar"></slot>
		<slot name="sidebar"></slot>
		<div class="layout-content" v-scrollable>
			<div :class="{ 'container-fluid': layoutType === 'fluid', 'container': layoutType === 'fixed' }">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	import Scrollable from 'app/src/directives/scrollable'
	export default {
		props: {
			layoutType: {
				type: String,
				default () {
					return 'fluid'
				}
			}
		},
		directives: {
			Scrollable
		}
	}
</script>