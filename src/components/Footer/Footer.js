import React from 'react'
import classes from './Footer.module.css'
import google_play from '../../assets/images/google-play.png';
import app_store from '../../assets/images/app-store.png';
import app_gallery from '../../assets/images/huawei.png';
import paymentOperators from '../../assets/images/paymentsOperators.png'


const Footer = () => {
	return (
		<footer>
			<div className={classes.container}>
				<div>
					<p>Download our apps</p>
					<div className={classes.store_images}>
						<div>
							<a href='https://www.apple.com/pl/app-store'>
								<img src={app_store} alt='App Store logo'></img>
							</a>
						</div>
						<div>
							<a href='https://play.google.com/store'>
								<img src={google_play} alt='Google Play logo'></img>
							</a>
						</div>
						<div>
							<a href='https://appgallery.huawei.com/Featured'>
								<img src={app_gallery} alt='App Gallery logo'></img>
							</a>
						</div>
					</div>
				</div>

				<div className={classes.contact_container}>
					<div>Contact us</div>
					<div className={classes.contact_details}>
						<p><ion-icon name="home"></ion-icon>9748 Abingdon St, London SW1P 3JY</p>
						<p><ion-icon name="mail"></ion-icon> bartsfood@gmail.com</p>
						<p><ion-icon name="call"></ion-icon> 7424441519</p>
					</div>
				</div>

				<div>
					<img className={classes.payment_images} src={paymentOperators} alt='Payment operators'></img>
				</div>
			</div>

			<div className={classes.copyright}>Copyright © 2023 by Bart's Food, Inc. All rights reserved.</div>

		</footer>

	)
}

export default Footer