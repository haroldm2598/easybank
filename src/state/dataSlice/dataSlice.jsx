import { createSlice } from '@reduxjs/toolkit';
import img1 from '../../assets/images/icon-online.svg';
import img2 from '../../assets/images/icon-budgeting.svg';
import img3 from '../../assets/images/icon-onboarding.svg';
import img4 from '../../assets/images/icon-api.svg';

import articleImg1 from '../../assets/images/image-currency.jpg';
import articleImg2 from '../../assets/images/image-restaurant.jpg';
import articleImg3 from '../../assets/images/image-plane.jpg';
import articleImg4 from '../../assets/images/image-confetti.jpg';

import icon1 from '../../assets/images/icon-facebook.svg';
import icon2 from '../../assets/images/icon-youtube.svg';
import icon3 from '../../assets/images/icon-twitter.svg';
import icon4 from '../../assets/images/icon-pinterest.svg';
import icon5 from '../../assets/images/icon-instagram.svg';

const initialState = {
	value: 0,
	navLinks: ['Home', 'About', 'Contact', 'Blog', 'Careers'],
	ctaData: [
		{
			image: img1,
			title: 'Online Banking',
			article:
				'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
		},
		{
			image: img2,
			title: 'Simple Budgeting',
			article:
				'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'
		},
		{
			image: img3,
			title: 'Fast Onboarding',
			article:
				'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
		},
		{
			image: img4,
			title: 'Open API',
			article:
				'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
		}
	],
	articleData: [
		{
			image: articleImg1,
			author: 'By Claire Robinson',
			title: 'Receive money in any currency with no fees ',
			article:
				'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …'
		},
		{
			image: articleImg2,
			author: 'By Wilson Hutton',
			title: 'Treat yourself without worrying about money',
			article:
				'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'
		},
		{
			image: articleImg3,
			author: 'By Wilson Hutton',
			title: 'Take your Easybank card wherever you go',
			article:
				'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'
		},
		{
			image: articleImg4,
			author: 'By Claire Robinson',
			title: 'Our invite-only Beta accounts are now live! ',
			article:
				'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...'
		}
	],

	footerLinks: [
		'About Us',
		'Careers',
		'Contact',
		'Support',
		'Blog',
		'Privacy Policy'
	],
	footerIcons: [
		{ image: icon1 },
		{ image: icon2 },
		{ image: icon3 },
		{ image: icon4 },
		{ image: icon5 }
	]
};

const dataSlice = createSlice({
	name: 'dataSlice',
	initialState,
	reducers: {
		test: (state, action) => {
			state.value = action.payload;
		}
	}
});

export const { test } = dataSlice.actions;

export default dataSlice.reducer;
