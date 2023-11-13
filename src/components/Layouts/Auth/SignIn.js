

function SignIn() {
    
    return (
        <form>
            <div className="email">
                <label htmlFor="email">Enter Your Email</label>
                <input 
                    type="email"
                    id="email"
                    placeholder="email"
                    required
                />
            </div>
            <div className="Password">
                <label htmlFor="Password">Enter Your Password</label>
                <input 
                    type="Password"
                    id="Password"
                    placeholder="Password"
                    required
                />
            </div>
        </form>
    )
}

export default SignIn;