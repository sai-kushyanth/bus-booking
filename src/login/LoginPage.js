
function LoginPage() {
    return(
        <section id="signin">
            <div className="form-wrapper">
                <header className="form-head">
                    <h2>Login to Safiri</h2>
                </header>
                <form>
                    <div className="name-form">
                        <label for="name">USERNAME</label>
                        <input type="text" name="name" required/>
                    </div>
                    <div className="email-form">
                        <label for="email">PASSWORD</label>
                        <input type="password" name="password" required/>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </section>
    )
}

export default LoginPage