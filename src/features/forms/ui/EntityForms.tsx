import type { FormEvent } from "react"
import { Button } from "../../../shared/ui/Button"
import { Modal } from "../../../shared/ui/Modal"
import { formatBrazilianDateInput, isValidBrazilianDate } from "../../../shared/utils/date"
import { formatTabCodeInput, type MenuForm, type PartyForm, type TabForm } from "./forms"

type EntityFormsProps = {
  editingId: string | null
  menuForm: MenuForm
  modal: string | null
  partyForm: PartyForm
  tabForm: TabForm
  onClose: () => void
  onMenuFormChange: (form: MenuForm) => void
  onPartyFormChange: (form: PartyForm) => void
  onSaveMenu: (event: FormEvent) => void
  onSaveParty: (event: FormEvent) => void
  onSaveTab: (event: FormEvent) => void
  onTabFormChange: (form: TabForm) => void
}

export function EntityForms({
  editingId,
  menuForm,
  modal,
  partyForm,
  tabForm,
  onClose,
  onMenuFormChange,
  onPartyFormChange,
  onSaveMenu,
  onSaveParty,
  onSaveTab,
  onTabFormChange,
}: EntityFormsProps) {
  return (
    <>
      <Modal
        onClose={onClose}
        open={modal === "party"}
        title={editingId ? "Editar festa" : "Criar festa"}
      >
        <form className="form" onSubmit={onSaveParty}>
          <input
            maxLength={20}
            onChange={e => onPartyFormChange({ ...partyForm, name: e.target.value })}
            placeholder="Nome"
            required
            value={partyForm.name}
          />
          <input
            inputMode="numeric"
            onChange={e =>
              onPartyFormChange({
                ...partyForm,
                date: formatBrazilianDateInput(e.target.value),
              })
            }
            pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}"
            placeholder="Data"
            required
            value={partyForm.date}
          />
          {partyForm.date && !isValidBrazilianDate(partyForm.date) && (
            <small>Use uma data válida no formato dd/mm/aaaa</small>
          )}
          <input
            maxLength={50}
            onChange={e => onPartyFormChange({ ...partyForm, notes: e.target.value })}
            placeholder="Observação"
            value={partyForm.notes}
          />
          <Button type="submit">Salvar</Button>
        </form>
      </Modal>
      <Modal
        onClose={onClose}
        open={modal === "tab"}
        title={editingId ? "Editar comanda" : "Criar comanda"}
      >
        <form className="form" onSubmit={onSaveTab}>
          <input
            maxLength={20}
            onChange={e => onTabFormChange({ ...tabForm, code: e.target.value })}
            placeholder="Nome do responsável"
            required
            value={tabForm.code}
          />
          <input
            maxLength={10}
            onChange={e =>
              onTabFormChange({
                ...tabForm,
                nfcCard: formatTabCodeInput(e.target.value),
              })
            }
            placeholder="Identificador"
            value={tabForm.nfcCard}
          />
          <input
            inputMode="decimal"
            maxLength={12}
            min="0"
            onChange={e => onTabFormChange({ ...tabForm, minimumSpend: e.target.value })}
            pattern="[0-9.]+(,[0-9]{1,2})?"
            placeholder="Consumo mínimo"
            step="0.01"
            type="text"
            value={tabForm.minimumSpend}
          />
          <Button type="submit">Salvar</Button>
        </form>
      </Modal>
      <Modal
        onClose={onClose}
        open={modal === "menu"}
        title={editingId ? "Editar item" : "Criar item"}
      >
        <form className="form" onSubmit={onSaveMenu}>
          <input
            maxLength={20}
            onChange={e => onMenuFormChange({ ...menuForm, name: e.target.value })}
            placeholder="Nome"
            required
            value={menuForm.name}
          />
          <input
            inputMode="decimal"
            maxLength={12}
            min="0"
            onChange={e => onMenuFormChange({ ...menuForm, price: e.target.value })}
            pattern="[0-9.]+(,[0-9]{1,2})?"
            placeholder="Preço"
            step="0.01"
            type="text"
            value={menuForm.price}
          />
          <Button type="submit">Salvar</Button>
        </form>
      </Modal>
    </>
  )
}
