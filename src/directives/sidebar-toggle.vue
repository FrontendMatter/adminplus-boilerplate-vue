<script>
	import { sidebarToggle } from 'bootstrap-layout'
	export default {
		bind () {
			this.el.addEventListener('click', e => sidebarToggle._onClick(e))
		},
		unbind () {
			this.el.removeEventListener('click', e => sidebarToggle._onClick(e))
		}
	}
</script>