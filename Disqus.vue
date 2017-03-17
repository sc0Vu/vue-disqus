<template>
<div>
    <div id="disqus_thread"></div>
    <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
</div>
</template>

<script>
export default {
	name: 'disqus',
	props: [
		'shortname', 'url', 'identifier', 'title', 'categoryId'
	],
	mounted () {
		this.disqus()
	},
    methods: {
    	disqus () {
    		var self = this
    		var d = document
    		var s = d.createElement('script');

	        window.disqus_config = function () {
	            this.page.url = self.url || location.href
	            this.page.identifier = self.identifier || self.$route.fullPath
	            this.page.title = self.title || d.title
	            this.page.category_id = self.categoryId || 12345
	        };
	        s.src = 'https://' + this.shortname + '.disqus.com/embed.js';
	        s.setAttribute('data-timestamp', +new Date());
	        (d.head || d.body).appendChild(s);
    	}
    }
}
</script>