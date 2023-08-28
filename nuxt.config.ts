// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  supabase:{
    url:"https://omqtjezaipmkehwrqnkj.supabase.co",
    redirect:false,
    key:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tcXRqZXphaXBta2Vod3JxbmtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMxNTg4NjQsImV4cCI6MjAwODczNDg2NH0.12oiUu6DARkpSvOpmRag5o_svOKYACBM_QEEsKM2j7c",
  },
  modules: ['@nuxtjs/supabase'],
  css: ["@/assets/scss/app.scss"],

})
