export default {
	install(Vue, options){
		Vue.mixin({
			methods: {
				openUrl(url){
					window.open(url, '_blank');
				}
			}
		});
	}
}
