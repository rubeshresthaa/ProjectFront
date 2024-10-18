const Products = () => {
  return (
    <div>
      <div className="overflow-hidden w-full overflow-x-auto rounded-md border border-neutral-300 dark:border-neutral-700">
    <table className="w-full text-left text-sm text-neutral-600 dark:text-neutral-300">
        <thead className="border-b border-neutral-300 bg-neutral-50 text-sm text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white">
            <tr>
                <th scope="col" className="p-4">CustomerID</th>
                <th scope="col" className="p-4">Name</th>
                <th scope="col" className="p-4">Email</th>
                <th scope="col" className="p-4">Membership</th>
            </tr>
        </thead>
        <tbody className="divide-y divide-neutral-300 dark:divide-neutral-700">
                <tr className="even:bg-black/5 dark:even:bg-white/10">
                    <td className="p-4">2335</td>
                    <td className="p-4">Alice Brown</td>
                    <td className="p-4">alice.brown@penguinui.com</td>
                    <td className="p-4">Silver</td>
                </tr>
                <tr className="even:bg-black/5 dark:even:bg-white/10">
                    <td className="p-4">2338</td>
                    <td className="p-4">Bob Johnson</td>
                    <td className="p-4">johnson.bob@penguinui.com</td>
                    <td className="p-4">Gold</td>
                </tr>
                <tr className="even:bg-black/5 dark:even:bg-white/10">
                    <td className="p-4">2342</td>
                    <td className="p-4">Sarah Adams</td>
                    <td className="p-4">s.adams@penguinui.com</td>
                    <td className="p-4">Gold</td>
                </tr>
                <tr className="even:bg-black/5 dark:even:bg-white/10">
                    <td className="p-4">2345</td>
                    <td className="p-4">Alex Martinez</td>
                    <td className="p-4">alex.martinez@penguinui.com</td>
                    <td className="p-4">Gold</td>
                </tr>
                <tr className="even:bg-black/5 dark:even:bg-white/10">
                    <td className="p-4">2346</td>
                    <td className="p-4">Ryan Thompson</td>
                    <td className="p-4">ryan.thompson@penguinui.com</td>
                    <td className="p-4">Silver</td>
                </tr>
                <tr className="even:bg-black/5 dark:even:bg-white/10">
                    <td className="p-4">2349</td>
                    <td className="p-4">Emily Rodriguez</td>
                    <td className="p-4">emily.rodriguez@penguinui.com</td>
                    <td className="p-4">Gold</td>
                </tr>
        </tbody>
    </table>
</div>

    </div>
  )
}
export default Products