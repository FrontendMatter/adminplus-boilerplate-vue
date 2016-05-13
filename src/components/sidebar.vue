<template>
	<div class="sidebar" :id="sidebarId" v-scrollable>
		<slot></slot>
	</div>
</template>

<script>
	import { sidebar } from 'bootstrap-layout'
	import Scrollable from 'app/src/directives/scrollable'
	import randString from 'mout/random/randString'

	export default {
		props: {
			sidebarId: {
				type: String,
				default () {
					return `sidebar-${ randString(10) }`
				}
			}
		},
		ready () {
			sidebar.init(this.$el)
		},
		beforeDestroy () {
			sidebar.destroy(this.$el)
		},
		directives: {
			Scrollable
		}
	}
</script>