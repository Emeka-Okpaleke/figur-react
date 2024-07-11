import vaultimage from "../assets/image/vaultImg.png"
const Section5 = () => {
    return ( 
        <div className="fifth-cover">
                <div className="fifth container">
                    <div>
                        <h3>Keep your money in a vault and hold your key.</h3>
                        <p>Vault is a unique feature in figur that allows the user to save money, and send money to their loved ones, and it can only be accessed using a unique key. With vault,
                            you don't have to bother about networks and service providers. Just go to the vault and access your funds.</p>

                        <div className="fifth-subflex">
                            <div>
                                <h5>Create a vault</h5>
                                <p>Create multiple vaults for your various needs. Secure your money in each vault using a unique key.</p>
                            </div>
                            <div>
                                <h5>Take money from vault</h5>
                                <p>Access money from a vault using the created vault
                                key and instantly fund your account. No delay, No charges!</p>
                            </div>
                        </div>
                    </div>
                    <div className="fifth-img-container" >
                        <img src={vaultimage} alt="" className="fifth-img"/>
                    </div>

                </div>
        </div>

     );
}
 
export default Section5;