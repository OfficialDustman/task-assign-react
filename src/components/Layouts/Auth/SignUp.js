

function SignUp(props) {
    let {teams} = props;

    return (
        <form action="">
            <select 
                name="teams" 
                id="teams"
                required
            >
                {/* {teams.map((team) => {
                    return (
                        <option value={team}></option>
                    )
                })} */}
            </select>
            <div className="Username">
                <label htmlFor="Username">Enter Your Username</label>
                <input
                    type="text"
                    id="Username"
                    placeholder="Username"
                    required
                />
            </div>
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

export default SignUp;