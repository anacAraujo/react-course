import { useEffect, useState } from 'react';
import ReceitasData from './receitasData';
import ReceitaItem from './receitaItem';

export default function ShowReceitas() {
	const [receitass, setReceitas] = useState();
	const receitas = ReceitasData.data;
	console.log(ReceitasData.data)

	function displayReceitas() {
		const components = [];
		for (const receita of receitas) {
			const comp = <ReceitaItem key={receita.nome} nome={receita.nome} ingredientes={receita.ingredientes} passos={receita.passos}></ReceitaItem>
			components.push(comp);
		}
		return components;
	}

	return (
		<ul className="col-md-4 list-group">
			{displayReceitas()}
		</ul>
	);
}