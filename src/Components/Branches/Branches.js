import './Branches'
import React from 'react'

function Branches() {
	return (
		<>
			<div className="buttons">
				<table className="table">
					<tr>
						<th>
							<button className="button_ece">ECE</button>
						</th>
						<th>
							<button className="button_cse">CSE</button>
						</th>
						<th>
							<button className="button_civil">CIVIL</button>
						</th>
					</tr>
					<tr>
						<td>
							<button className="button_mech">MECH</button>
						</td>
						<td>
							<button className="button_mme">MME</button>
						</td>
						<td>
							<button className="button_puc">PUC</button>
						</td>
					</tr>
				</table>
			</div>
		</>
	)
}

export default Branches