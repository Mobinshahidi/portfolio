import React from 'react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';

const SliderPic = () => {
	return (
		<div>
			<Swiper
				grabCursor={true}
				effect={'creative'}
				creativeEffect={{
					prev: {
						shadow: true,
						origin: 'left center',
						translate: ['-5%', 0, -200],
						rotate: [0, 100, 0],
					},
					next: {
						origin: 'right center',
						translate: ['5%', 0, -200],
						rotate: [0, -100, 0],
					},
				}}
				modules={[EffectCreative]}
				className="mySwiper"
			>
				<SwiperSlide>
					<img src="../../../assets/1" alt="" fill-sizes={'max-width:100%'} />
				</SwiperSlide>
				<SwiperSlide>
					<img src="../../../assets/2" alt="" fill-sizes={'max-width:100%'} />
				</SwiperSlide>{' '}
				<SwiperSlide>
					<img src="../../../assets/3" alt="" fill-sizes={'max-width:100%'} />
				</SwiperSlide>{' '}
				<SwiperSlide>
					<img src="../../../assets/4" alt="" fill-sizes={'max-width:100%'} />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default SliderPic;
