<template>
	<nav :class="navbarClass">
		<slot></slot>
	</nav>
</template>

<script>
	const layoutSpacingClass = 'ls-top-navbar'

	export default {
		props: {
			floating: {
				type: Boolean,
				default: true
			},
			floatingPlacement: {
				type: String,
				default: 'top'
			}
		},
		computed: {
			navbarClass () {
				let classes = {
					'navbar': true,
					'navbar-full': this.floating
				}
				if (this.floating) {
					classes[`navbar-fixed-${ this.floatingPlacement }`] = true
				}
				return classes
			}
		},
		methods: {
			createFloating () {
				this.$parent.$el.classList.add(layoutSpacingClass)
			},
			destroyFloating () {
				this.$parent.$el.classList.remove(layoutSpacingClass)
			}
		},
		created () {
			if (this.floating) {
				this.createFloating()
			}
		},
		beforeDestroy () {
			if (this.floating) {
				this.destroyFloating()
			}
		},
		watch: {
			floating (floating) {
				this[floating ? 'createFloating' : 'destroyFloating']
			}
		}
	}
</script>