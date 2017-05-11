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
      var d = document
      var s = d.createElement('script')
      var x = d.head || d.body

      window.disqus_config = function (self) {
        this.page.url = self.url || location.href
        this.page.identifier = self.identifier || self.$route.fullPath
        this.page.title = self.title || d.title
        this.page.category_id = self.categoryId || 12345
      }.bind(window, this)
      s.src = 'https://' + this.shortname + '.disqus.com/embed.js'
      s.setAttribute('data-timestamp', new Date())
      x.appendChild(s)
    }
  }
}
</script>
