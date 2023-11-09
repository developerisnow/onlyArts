import {call, near, NearBindgen, UnorderedMap, view} from 'near-sdk-js'
import {assert} from './utils'
import {Comment} from './model'

@NearBindgen({})
class OnlyArtsContract {
  ONLY_ARTS_COMMISSION_PERCENT = 50;
  comments = new UnorderedMap<Comment>('map-uid-1');
  artCommentsCount = new UnorderedMap<number>('map-uid-2');

  createCommentId(artId: string, commentatorAccountId: string) {
    return artId + "_" + commentatorAccountId;
  }

  @call({ payableFunction: true })
  comment({ artId, comment}: { artId: string, comment: string }) {
    const commentOffer: bigint = near.attachedDeposit() as bigint;
    near.log(`Comment offer ${commentOffer}`);
    const commentsCount = this.artCommentsCount.get(artId, {defaultValue: 0});
    const commentPrice = commentsCount + 1;
    assert(commentOffer >= commentPrice, "Not enough money to become this art connoisseur");

    const commentatorAccountId = near.predecessorAccountId();
    near.log(`Commentator account id ${commentatorAccountId}`);

    const commentId = this.createCommentId(artId, commentatorAccountId);
    near.log(`Comment id ${commentId} and comment ${this.comments.get(commentId)}`);
    assert(this.comments.get(commentId) === null, "You already a stake holder of this fine art. Congrats !");

    const promise = near.promiseBatchCreate(near.currentAccountId());
    near.promiseBatchActionTransfer(promise, (commentPrice * this.ONLY_ARTS_COMMISSION_PERCENT) / 100);

    this.comments.set(commentId, {
      likes: 0,
      text: comment
    });
    this.artCommentsCount.set(commentId, commentsCount + 1);
  }

  // just for the demo purposes
  @call({})
  cleanState() {
    this.comments.clear();
    this.artCommentsCount.clear();
  }

  @view({})
  getComment(commentId: string): string {
    let comment = this.comments.get(commentId);
    return comment === null ? "comment is missing" : comment.text;
  }

  @view({})
  getComments(): string {
    let keys = this.comments.keys({start: 0, limit: this.comments.length});
    let result = "";
    for (let i = 0; i < keys.length; i++) {
      result += `${keys[i]}=>${this.comments.get(keys[i])}\n`
    }
    return result;
  }
}