export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `好書推薦網剛更新完成，` +
      `需要刷新載入新版本嗎?`
  )

  if (answer === true) {
    window.location.reload()
  }
}
