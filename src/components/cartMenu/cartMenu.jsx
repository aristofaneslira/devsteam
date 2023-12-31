import styles from './cartMenu.module.css'

import CartOption from '@/components/cartOption/cartOption'

export default function CartMenu({ cart, onRemove }) {
    return (
        <div className={styles.menu}>
            <div className={styles.options}>
                {
                    cart.length === 0 && <p>Nenhum produto no seu carrinho.</p>
                }
                {
                    cart.map((cartInfo, pos) =>
                        <CartOption
                            title={cartInfo.name}
                            image={cartInfo.image}
                            price={cartInfo.price}
                            onRemove={() => onRemove(pos)}
                            key={`cart-info-${pos}`}
                        />
                    )
                }
            </div>
            <div className={styles.priceline}>
                <h2>Total</h2>
                <h2 className={styles.price}>R$ {cart.reduce((prev, current) => prev + current.price, 0).toFixed(2)}</h2>
            </div>
        </div>
    )
}