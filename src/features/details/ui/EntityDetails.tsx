import { Button } from "../../../shared/ui/Button"
import { Modal } from "../../../shared/ui/Modal"
import { formatCurrency } from "../../../shared/utils/currency"
import { formatStoredDate } from "../../../shared/utils/date"
import type { MenuItem, Party, Tab } from "../../party/model/types"

type EntityDetailsProps = {
  menuDetail?: MenuItem
  modal: string | null
  partyDetail?: Party
  tabDetail?: Tab
  onArchiveParty: (partyId: string) => void
  onClose: () => void
  onDeleteMenuItem: (itemId: string) => void
  onDeleteParty: (partyId: string) => void
  onDeleteTab: (tabId: string) => void
  onEditMenuItem: (item: MenuItem) => void
  onEditParty: (party: Party) => void
  onEditTab: (tab: Tab) => void
  onSetActiveParty: (partyId: string, active: boolean) => void
  onToggleMenuItem: (item: MenuItem) => void
  onToggleTab: (tab: Tab) => void
  onUnarchiveParty: (partyId: string) => void
}

export function EntityDetails({
  menuDetail,
  modal,
  partyDetail,
  tabDetail,
  onArchiveParty,
  onClose,
  onDeleteMenuItem,
  onDeleteParty,
  onDeleteTab,
  onEditMenuItem,
  onEditParty,
  onEditTab,
  onSetActiveParty,
  onToggleMenuItem,
  onToggleTab,
  onUnarchiveParty,
}: EntityDetailsProps) {
  return (
    <>
      {partyDetail && (
        <Modal onClose={onClose} open={modal === "partyDetails"} title="Detalhes da festa">
          <div className="detail-list">
            <div>
              <span>Nome</span>
              <strong>{partyDetail.name}</strong>
            </div>
            <div>
              <span>Data</span>
              <strong>{formatStoredDate(partyDetail.date)}</strong>
            </div>
            <div>
              <span>Observação</span>
              <strong>{partyDetail.notes || "Sem observação"}</strong>
            </div>
            <div>
              <span>Status</span>
              <strong>{partyDetail.active ? "Ativa" : "Inativa"}</strong>
            </div>
          </div>
          <div className="modal-actions">
            <Button onClick={() => onEditParty(partyDetail)} variant="secondary">
              Editar
            </Button>
            {partyDetail.archived ? (
              <>
                <Button
                  onClick={() => onUnarchiveParty(partyDetail.id)}
                  variant="secondary"
                >
                  Desarquivar
                </Button>
                <Button onClick={() => onDeleteParty(partyDetail.id)} variant="danger">
                  Excluir
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={() => onSetActiveParty(partyDetail.id, !partyDetail.active)}
                  variant="secondary"
                >
                  {partyDetail.active ? "Desativar" : "Ativar"}
                </Button>
                <Button onClick={() => onArchiveParty(partyDetail.id)} variant="secondary">
                  Arquivar
                </Button>
              </>
            )}
          </div>
        </Modal>
      )}
      {tabDetail && (
        <Modal onClose={onClose} open={modal === "tabDetails"} title="Detalhes da comanda">
          <div className="detail-list">
            <div>
              <span>Nome</span>
              <strong>{tabDetail.code}</strong>
            </div>
            <div>
              <span>Código</span>
              <strong>{tabDetail.nfcCard || "Sem código"}</strong>
            </div>
            <div>
              <span>Mínimo</span>
              <strong>{formatCurrency(tabDetail.minimumSpend)}</strong>
            </div>
            <div>
              <span>Status</span>
              <strong>{tabDetail.active ? "Ativa" : "Inativa"}</strong>
            </div>
          </div>
          <div className="modal-actions">
            <Button onClick={() => onEditTab(tabDetail)} variant="secondary">
              Editar
            </Button>
            <Button onClick={() => onToggleTab(tabDetail)} variant="secondary">
              {tabDetail.active ? "Desativar" : "Ativar"}
            </Button>
            <Button onClick={() => onDeleteTab(tabDetail.id)} variant="danger">
              Excluir
            </Button>
          </div>
        </Modal>
      )}
      {menuDetail && (
        <Modal onClose={onClose} open={modal === "menuDetails"} title="Detalhes do item">
          <div className="detail-list">
            <div>
              <span>Nome</span>
              <strong>{menuDetail.name}</strong>
            </div>
            <div>
              <span>Preço</span>
              <strong>{formatCurrency(menuDetail.price)}</strong>
            </div>
            <div>
              <span>Status</span>
              <strong>{menuDetail.active ? "Ativo" : "Inativo"}</strong>
            </div>
          </div>
          <div className="modal-actions">
            <Button onClick={() => onEditMenuItem(menuDetail)} variant="secondary">
              Editar
            </Button>
            <Button onClick={() => onToggleMenuItem(menuDetail)} variant="secondary">
              {menuDetail.active ? "Desativar" : "Ativar"}
            </Button>
            <Button onClick={() => onDeleteMenuItem(menuDetail.id)} variant="danger">
              Excluir
            </Button>
          </div>
        </Modal>
      )}
    </>
  )
}
