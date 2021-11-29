import { useState } from "react";
import { Htag, Input, Rating, Tag } from "../components";
import { Button } from "../components";
import { Ptag } from "../components";
import { withLayout } from "../layout/Layout";
import axios from 'axios';
import { GetStaticProps } from "next";
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {

	const [rating, setRating] = useState<number>(4);

	return (
		<>
			<Htag tag="h1">текст</Htag>
			<Button appearance='primary' arrow='down'>кнопка</Button>
			<Button appearance='ghost' arrow='right'>кнопка</Button>
			<Ptag size='medium'>Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.</Ptag>
			<Tag size='medium' color='primary'>тег</Tag>
			<Rating isEditable={true} rating={rating} setRating={setRating} />
			<Input />

		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory
	});
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
