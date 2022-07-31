const { FULFILLED, REJECTED, PENDING } = {
	FULFILLED: 'fulfilled',
	REJECTED: 'rejected',
	PENDING: 'pending',
};

class MyPromise {
	#thenCbs = [];
	#catchCbs = [];
	#state = PENDING;
	#value;

	constructor(cb) {
		try {
			cb(this.#onSuccess, this.#onFail);
		} catch (error) {
			this.#onFail(error);
		}
	}

	#runCallbacks() {
		if (this.#state === FULFILLED) {
			this.#thenCbs((callback) => {
				callback(this.#value);
			});

			this.#runCallbacks = [];
		}

		if (this.#state === REJECTED) {
			this.#catchCbs((callback) => {
				callback(this.#value);
			});

			this.#catchCbs = [];
		}
	}

	#onSuccess(value) {
		if (this.#state !== PENDING) return;

		this.#value = value;
		this.#state = FULFILLED;
		this.#runCallbacks();
	}

	#onFail(value) {
		if (this.#state !== PENDING) return;

		this.#value = value;
		this.#state = REJECTED;
		this.#runCallbacks();
	}

	then(cb) {
		this.#thenCbs.push(cb);

		this.#runCallbacks();
	}
}

const p = new Promise((res, rej) => {});
