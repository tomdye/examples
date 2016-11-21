import { Widget, DNode, WidgetState } from 'dojo-interfaces/widgetBases';
import createWidgetBase from 'dojo-widgets/bases/createWidgetBase';
import d from 'dojo-widgets/util/d';
import createCard, { CardState } from '../card/createCard';
import { assign } from 'dojo-core/lang';

export type SeenWithState = WidgetState & {
	cards: CardState[];
}

export type SeenWith = Widget<SeenWithState>;

const createSeenWith = createWidgetBase
	.extend({
		classes: [ 'seenWith' ],
		childNodeRenderers: [
			function(this: SeenWith): DNode[] {
				const { cards } = this.state;

				const cardNodes = cards.map((card) => {
					const state = assign({ large: true }, card);
					return d(createCard, { id: card.cardId, state });
				});

				return cardNodes;
			}
		]
	});

export default createSeenWith;
