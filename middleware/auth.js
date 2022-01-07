export default function ({ app, redirect }) {
  const tutorialAuth = app.$cookies.get("tutorial-auth")
  if (!tutorialAuth) {
    return redirect("/")
  }
}
